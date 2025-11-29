function inputEmail() {
    const emailReg = /^[A-Za-z0-9.-]+@[A-Za-z.-]+\.[A-Za-z]{2,6}$/;
 
    while (true) {
        let email = prompt("Введите email:");

        if (email === null) {
            alert("Ввод email отменён.");
            return null;
        }

        email = email.trim();

        if (emailReg.test(email)) {
            alert("Email введен: " + email);
            return email;
        } else {
            alert("Неверный формат email.");
        }
    }
}

function inputCity() {
    const cityReg = /^(?=.{2,}$)[A-Za-zА-Яа-яЁё\- ]+$/;

    while (true) {
        let city = prompt("Введите город:");

        if (city === null) {
            alert("Ввод города отменён.");
            return null;
        }

        city = city.trim();

        if (cityReg.test(city)) {
            alert("Город принят: " + city);
            return city;
        } else {
            alert("Неверное название города.");
        }
    }
}

const userEmail = inputEmail();
const userCity  = inputCity();

if (userEmail && userCity) {
    alert(`Данные пользователя: Email: ${userEmail}, Город: ${userCity}`);
}
