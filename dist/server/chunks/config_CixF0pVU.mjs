const virtualConfig = {"database":{"entrypoint":"emdash/db/sqlite","config":{"url":"file:./data.db"},"type":"sqlite"},"storage":{"entrypoint":"emdash/storage/local","config":{"directory":"./uploads","baseUrl":"/_emdash/api/media/file"}}};

export { virtualConfig as default };
