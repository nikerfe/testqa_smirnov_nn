/*существующие данные в БД*/
const testPost = {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
};

/*несуществующие данные в БД для проверки некорректных значений запроса*/
const nonexistentPost = {
    userId: 123456789,
    id: 123456789,
    title: "Title",
    body: "Body"
}

module.exports = { testPost, nonexistentPost }