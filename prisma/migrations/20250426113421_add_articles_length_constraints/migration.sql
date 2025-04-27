ALTER TABLE articles ADD CONSTRAINT articles_title_check CHECK (length(title) >= 1);
ALTER TABLE articles ADD CONSTRAINT articles_content_check CHECK (length(content) >= 1);