export const fetchQuizzes = genre => {
    return {
        type:"GENRE_SELECTED",
        payload: genre.Quizzes
    }
}