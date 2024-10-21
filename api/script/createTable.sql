CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol_id INTEGER NOT NULL REFERENCES roles(id),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO roles (name) VALUES ('Administrador'), ('Asesor');

CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    product VARCHAR(50) NOT NULL,
    requested_amount NUMERIC(12, 0) NOT NULL,
    franchise VARCHAR(20),
    rate NUMERIC(4, 2),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    created_by_user_id INTEGER NOT NULL REFERENCES users(id),
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_by_user_id INTEGER REFERENCES users(id)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO products (name) VALUES 
('Credito de Consumo'), 
('Libranza Libre Inversión'), 
('Tarjeta de Credito');
