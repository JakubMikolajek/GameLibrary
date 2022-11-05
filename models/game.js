class Game {
    constructor(
        id,
        categoryIds,
        title,
        imageUrl,
        developers,
        publisher,
        description
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.developers = developers;
        this.publisher = publisher;
        this.description = description;
    }
}

export default Game;
