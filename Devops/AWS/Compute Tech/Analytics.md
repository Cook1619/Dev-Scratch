# Analytics Services
### A data warehouse is a data storage solution that aggregates massive amounts of historical data from disparate sources
### Data warehouses support querying, reporting, analytics, and BI. They are not used for transaction processing
- Redshift
  - Data warehouse solution
  - Improves speed and efficiency
  - Handles exabyte scale data
  - Good for data consolidation
  - Good for when you want to run a database that doesn't require real time transaction processing
### Analytics is the act of querying and processing your data
- Athena
  - A query service for Amazon S3
  - Pay per query
  - Analyze S3 data using SQL
  - Considered serverless
- Glue
  - Prepares your data for analytics
  - ETL service
  - Prepare and load data
  - Helps to better understand your data
- Kinesis
  - Allows you to analyze data and video streams in real time
  - Supports video, audio, application logs, website click-streams and IoT
- EMR
  - Help you process large amounts of data
  - Analyze data using Hadoop
  - Works with other big data frameworks like Apache Spark
- Data Pipeline
  - Help you move data between compute and storage services running either on AWS or on prem
  - Moves data at certain intervals or based on conditions
  - Sends notifications on success or failure
- QuickSight
  - Help you visualize your data
  - Build dashboards
### Search data in S3 ??  Athena
### Log analytics ?? Kinesis
