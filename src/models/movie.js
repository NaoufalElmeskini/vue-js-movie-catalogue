export default class Movie {
  constructor(data) {
    this.id = data.id;
    this.genres = data.genres;
    this.poster = data.poster;
    this.backdrop = data.backdrop;
    this.title = data.title;
    this.overview = data.overview;
    this.imdbRating = data.imdb_rating;
    this.director =
      typeof data.director === "string"
        ? data.director
        : data.director.join(", ");
    this.releasedDate = data.released_on;
    this.duration = data.length;
    this.cast = data.cast;
  }
}
