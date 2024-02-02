CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR (255) NOT NULL, 
    content TEXT NOT NULL
);

INSERT INTO posts(title,content) VALUES('Table Football', 'Is Table Football a sport?');
INSERT INTO posts(title,content) VALUES('Table Tennis/Table Football', 'Do you prefer Table Tennis or Table Football?');
INSERT INTO posts(title,content) VALUES('Table Football underrated/overrated', 'Who is overrated or underrated?');
INSERT INTO posts(title,content) VALUES('Table Football bad habits', 'What are Table Football bad habits?'); 

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY, 
    comment TEXT NOT NULL, 
    posts_id INTEGER References posts(id)
);