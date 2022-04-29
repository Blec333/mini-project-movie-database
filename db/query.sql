SELECT *
FROM course_names
JOIN movie ON movie_name.movie = movie.id;

SELECT *
FROM movie_reviews
JOIN movie_reviews ON movie_reviews.movie_reviews = movie_reviews.id;


SELECT movie.id AS movieID, movie.name , movie_names.name 
FROM movie
JOIN movie_names ON movie_id.movie = movie.id;


SELECT movie_reviews.id AS movieID, movie_reviews.name , movie_names.name
FROM movie_reviews
INNER JOIN movie_reviews ON movie_id.movie_reviews = movie_reviews
