# Databases

- RDS
  - Relational
  - Easy to launch and manage
  - supports popular db engines (aurora, postgres, mysql, etc)
  - high availability using multi az deployment
  - aws manages the db with automatic software patching, automated backups, os maintenance
  - Launch read only replicas across regions in order to provide enhanced performance and durability
- Aurora
  - Relational
  - compatible with mysql and postgres
  - 5x faster than normal mysql, 3x faster than normal postgres
  - Scales automatically while providing durability and high availability
  - Managed by RDS
- DynamoDB
  - No SQL
  - like mongo key value DB
  - fully managed and serverless
  - non-relational
  - Scales  auto to massive workloads
- DocumentDB
  - DocumentDB
  - Non-relational db that supports MongoDB
  - Document database
  - Fully managed and serverless
- ElastiCache
  - In-memory datastore
  - fully managed in memory datastore compatible with redis or memcached
  - Data can be lost
  - High performance low latency
- Neptune
  - Graph
  - graph db that supports highly connected datasets
  - Fully managed and serverless
  - Fast and reliable