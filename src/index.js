const messages = [
    "Andres",
    "Juan",
    "John",
    "Sofia",
    "Ana",
    "Maria",
    "James",
    "Carolina",
    "Salome"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };