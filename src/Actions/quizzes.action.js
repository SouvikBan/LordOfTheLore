

export const fetchQuizzes = genre => {
    return {
        type:"GENRE_SELECTED",
        payload: genre.Quizzes
    }
}

export const showscore = score => {
    return {
        type:"SHOW_SCORE",
        payload: score
    }
}

