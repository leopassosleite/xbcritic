INSERT INTO tb_movie(score, count, title, image, video) VALUES (0, 0, 'The Witcher III - Wild Hunt', 'https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64?q=90&w=177&h=265', 'https://www.youtube.com/watch?v=ehjJ614QfeM');
INSERT INTO tb_movie(score, count, title, image, video) VALUES (0, 0, 'Halo Infinite', 'https://store-images.s-microsoft.com/image/apps.21536.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.68796bde-cbf5-4eaa-a299-011417041da6?q=90&w=177&h=265', 'https://www.youtube.com/watch?v=ehjJ614QfeM');

INSERT INTO tb_user(name) VALUES ('Leonardo');
INSERT INTO tb_user(name) VALUES ('Filipe');
INSERT INTO tb_user(name) VALUES ('Fabricio');

INSERT INTO tb_score(user_id, movie_id, value) VALUES (19, 13, 3.5);
INSERT INTO tb_score(user_id, movie_id, value) VALUES (20, 14, 3.5);
INSERT INTO tb_score(user_id, movie_id, value) VALUES (21, 13, 4.5);