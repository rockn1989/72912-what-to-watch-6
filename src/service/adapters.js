export const adapterFilmData = (data) => {
  return {
    previewImage: data.preview_image || data.previewImage,
    posterImage: data.poster_image || data.posterImage,
    backgroundImage: data.background_image || data.backgroundImage,
    backgroundColor: data.background_color || data.backgroundColor,
    videoLink: data.video_link || data.videoLink,
    previewVideoLink: data.preview_video_link || data.previewVideoLink,
    scoresCount: data.scores_count || data.scoresCount,
    runTime: data.run_time || data.runTime,
    description: data.description,
    director: data.director,
    genre: data.genre,
    id: data.id,
    isFavorite: data.is_favorite || data.isFavorite,
    name: data.name,
    rating: data.rating,
    released: data.released,
    starring: data.starring
  };
};
