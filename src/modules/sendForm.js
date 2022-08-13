export const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const inputName = form.querySelector(".name");
  const inputTel = form.querySelector(".tel");
 


  const loadText = "Идёт отправка..";
  const errorText = "Ошибка...";
  const succesText = "Отправлено...";

  inputName.addEventListener("input", (e) => {
    const reg = /[^а-я]/gi;
    e.target.value = e.target.value.replace(reg, "");
    e.target.classList.add("error");
    if (!reg.test(e.target.value) && e.target.value.length > 2) {
      e.target.classList.remove("error");
    } else if (reg.test(e.target.value)) {
      e.target.value = e.target.value.replace(reg, "");
    }
  });
  inputTel.addEventListener("input", (e) => {
    const reg = /[^+0-9]/g;
    e.target.value = e.target.value.replace(reg, "");
    e.target.classList.add("error");
    if (
      !reg.test(e.target.value) &&
      e.target.value.length > 6 &&
      e.target.value.length < 11
    ) {
      e.target.classList.remove("error");
    } else if (reg.test(e.target.value)) {
      e.target.value = e.target.value.replace(reg, "");
    }
  });

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    if (
      !inputName.classList.contains("error") &&
      !inputTel.classList.contains("error")
    ) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = succesText;
          inputName.value = "";
          inputTel.value = "";
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = "Данные введены неверно";
      inputName.value = "";
      inputTel.value = "";
    }
  };

  try {
    if (!form) {
      throw Error("Верните форму");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
