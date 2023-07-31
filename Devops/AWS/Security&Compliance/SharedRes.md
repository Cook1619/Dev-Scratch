# Understanding Shared Responsibility Model
### In the public cloud, there is a shared security responsibility between you and AWS
- AWS is responsible for security of the cloud
- You are responsible for security in the cloud

### Security of the cloud
- AWS is responsible for protecting and securing their infrastructure
- For is global infrastructure elements
- AWS controls access to its data centers where your data resides
- AWS maintains networking components: generators, uninterruptible power supply systems, computer room AC, fire suppression units, and more
- AWS is responsible for any managed service like RDS, S3, ECS, or Lamda, patching of host operating systems, and data access endpoints
### You are responsible for how the services are implemented and managing your application
- Application data: Managing the data which include encryption options
- Security Config: securing your account, securing api calls, rotating credentials, restricting access from your VPS and more
- Patching: For guest OS, includes updates and security patches
- Identity and Access Management: for security and access management 
- Network Traffic: security group firewall config
- Installed software: You should frequently scan for and patch vulnerabilities in your code

EC2 responsibility model
- You: Security of code, storage of sensitive data, IAM permissions
- AWS: Lamda service, upgrading lamda languages, Lamda endpoints, OS, Underlying infra, Software dependencies 