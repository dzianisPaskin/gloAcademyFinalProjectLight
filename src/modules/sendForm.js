export const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const statusBlockName = document.createElement("div");
  const statusBlockTel = document.createElement("div");
  const inputName = form.querySelector(".name");
  const inputTel = form.querySelector(".tel");
  const formGroup_1 = document.querySelector(".form-group_1");
  const formGroup_2 = document.querySelector(".form-group_2");

  const loadText = "Идёт отправка..";
  const errorText = "Ошибка...";
  const succesText = "Отправлено...";

  const checkInputName = () => {
    const reg = /[^а-яА-Я]/gi;
    if (reg.test(inputName.value) || inputName.value.length <= 2) {
      inputName.classList.add("error");
      statusBlockName.textContent = `Только кириллица и не меньше 2х символов`;

      formGroup_1.append(statusBlockName);
      inputName.value = inputName.value.replace(reg, "");
    } else {
      inputName.classList.remove("error");
      statusBlockName.remove();
    }
  };

  const checkInputTel = () => {
    if (inputTel.value.length === 18) {
      inputTel.classList.remove("error");

      statusBlockTel.remove();
    } else {
      statusBlockTel.textContent = `Введите корректный номер +7 (****) ** ** **`;
      formGroup_2.append(statusBlockTel);
      inputTel.classList.add("error");
    }
  };

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
    }
  };

  try {
    if (!form) {
      throw Error("Верните форму");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
        [inputName, inputTel].forEach((el) => {
          if (el.value === "") {
            el.classList.add("error");
            statusBlock.textContent = "Заполните все поля";
            form.append(statusBlock);
          } else {
            el.classList.remove("error");
            statusBlock.remove()
          }
    
        })
      checkInputName()
      checkInputTel()
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
