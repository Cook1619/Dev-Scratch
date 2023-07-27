# Deployment and Infrastructure Services
### These services help you quickly stand up new apps, automate the management of infra, and provide real-time visibility into system health
### Infra as code allows you to write a script to provision AWS resources. The benefit is that you provision resources in a reproducible manner that saves time

- CloudFormation
  - Allows you to provision AWS resources using Infra as code
  - Provides repeatable process for provisioning resources
  - Works with most AWS services
  - Creates templates for the resources you want to provision
  - used for automating creating ec2 servers
- Elastic Beanstalk
  - Allows you to deploy your web app and web services to AWS
  - Orchestration service that provisions resources
  - Automatically handles deployment from load balancing, auto-scaling and more
  - Monitors application health via health dashboard
  - not on prem
- OpsWorks
  - Allows you to use Chef or Puppet to automate the configuration of your servers and deploy code
  - Manage on prem servers or ec2 instances in AWS cloud