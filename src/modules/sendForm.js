export const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const inputName = form.querySelector(".name");
  const inputTel = form.querySelector(".tel");

  const loadText = "Идёт отправка..";
  const errorText = "Ошибка...";
  const succesText = "Отправлено...";


  inputName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-я]/gi, "");
  });
  inputTel.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^+0-9]/g, "");
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
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    sendData(formBody)
      .then((data) => {
        statusBlock.textContent = succesText;
        inputName.value = ''
        inputTel.value = ''
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });

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
