docker run --rm --pull always -p 8000:8000 --user $(id -u) -v $(pwd)/mydata:/mydata surrealdb/surrealdb:latest start file:/mydata/mydatabase.db