ALTER TABLE users ADD CONSTRAINT users_user_name_check CHECK (length(user_name) >= 1);
ALTER TABLE users ADD CONSTRAINT users_email_check CHECK (length(email) >= 1);
ALTER TABLE users ADD CONSTRAINT users_password_check CHECK (length(password) >= 1);