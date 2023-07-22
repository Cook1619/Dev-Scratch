# Cloud Computing
- The cloud is a real place where your data is stored somewhere
- Servers are powerful computers that handle your requests
- Cloud computing is the delivery of computing services over the internet
  - Compute 
    - EC2
    - Lamda
  - Networking
    - VPC
    - Direct Connect
  - Storage
    - S3
    - EBS
  - Analytics
    - Athena
    - Redshift
  - Development
    - Cloud9
    - CodeCommit
  - Security
    - IAM
    - Macie
  - Databases
    - RDS
    - DynamoDB
- Virtual Machines
  - Virtualization lets you divide hardware resources on a single physical server into smaller units
  - Usage, your usage is placed on a meter, you only pay when you access it and only for what you use
    - On demand - No long term commitments or upfront payments
    - Pay as you go - Pay by the hours or the second for only what you use
## Advantages of cloud computing
  - Go global in minutes
    - You can deploy your applications around the world at the click of a button.
  - Stop spending money running and maintaining data centers
    - You can focus on building your applications instead of managing hardware.
  - Increase speed and agility
    - The provided services allow you to innovate more quickly and deliver your applications faster.
  - Stop guessing capacity
    - Your capacity is matched exactly to your demand.
  - Trade capital expense for variable expense
    - You pay for what you use instead of making huge upfront investments. 
## CapEx vs OpEx
- Capital Expenditures
  - Capital expenditures are upfront purchases toward fixed assets.
- Operating Expenses
  - Operating expenses are funds used to run day-to-day operations.
## Cloud Computing Models
- Infrastructure as a Service (IaaS)
  - Building Blocks 
    - Fundamental building blocks that can be rented. 
  - Web Hosting 
    - Monthly subscription to have a hosting company serve your website
- Software as a service (SaaS)
    - Using a complete application, on demand, that someone offers to users.
  - Email Provider
    - Your personal email that you access through a web browser is a SaasS
  - Platform as a service (PaaS)
    - Used by developers
      - Developer software using web based tools without worrying about the underlying infrastructure
    - Storefront Website
      - Tools provided to build a storefront app that runs on another company's service
## Cloud Deployment models
- Private cloud
  - Also called on prem
  - Exists in your internal data center
  - Doesn't offer the advantages of cloud computing
- Public cloud
  - Offered by AWS
  - You aren't responsible for the physical hardware
  - Provides all the advantages of cloud computing
- Hybrid (a combination between the 2)
  - Highly sensitive data stored locally
  - Web app runs on aws infrastructure
  - AWS provides tools so they talk to each other

# Region
- A region is a physical location in the that contains Availability zones (AZ's)
- You should set up resources in regions closest to your users
- Most  resources are tied to a specific region

# Availability Zones
- An Az is a collection of one or more data centers
- An AZ contains the servers you are renting, and it's where you deploy applications
- AN AZ is associated with a single region

# Global infrastructure
- The AWS Cloud infrastructure is built around AWS Regions and Availability Zones. An AWS Region is a
physical location in the world where we have multiple Availability Zones. Availability Zones consist of
one or more discrete data centers, each with redundant power, networking, and connectivity, housed
in separate facilities. These Availability Zones offer you the ability to operate production applications
and databases that are more highly available, fault-tolerant, and scalable than would be possible from
a single data center. For the latest information on the AWS Cloud Availability Zones and AWS Regions,
refer to AWS Global Infrastructure.
- This means if you deploy your application across multiple availability zones and one goes down, it shouldn't affect your application

# Edge Locations
- Think of them as a mini data center, but it's not used to launch resources like EC2 instances, it's used to cache your content, through cloudfront CDN, reduce latency, and speed up delivery of applications

# Latency
- Is the time that passes between a user request and the resulting response, low latency is better than high latency