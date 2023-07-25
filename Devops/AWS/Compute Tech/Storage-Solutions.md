# More Storage Solutions 
 - EC2 Storage
   - EC2 instances are hosted on a host computer or a rack
     in an AWS data center.
     These host computers can be split up virtually
     into many EC2 instances.
     Individual instances can have different types of storage.
     All EC2 instances must have a root drive.
     This could be an EBS volume or an instance store volume.
     You can also attach multiple EBS volumes
     to a single EC2 instance.
     You can think of these as hard drives
     that you've installed on the EC2 instance.
     The important distinction between EBS drives
     and instance store drives
     is that EBS drives are persistent.
     You can stop or terminate the instance,
     or even detach an EBS drive
     and attach it to a different EC2 instance.
     Instance store drives, on the other hand, are ephemeral.
     They have lower latency, but that data does not persist
     if an EC2 instance is stopped or terminated.
- Amazon Elastic Block Store (EBS)
  - EBS is a storage device (called a volume) that can be attached to (or removed from) your instance.
  - Data persists when the instance is not running
  - Tied to one Availability Zone
  - Can only be attached to one instance in the same Availability Zone
  - Recommended for: 
    - Quickly accessible data 
    - Running a database on an instance 
    - Long-term data storage
- EC2 Instance Store
  - An instance store is local storage that is physically attached to the host computer and cannot be removed.
    - Storage on disks physically attached to an instance
    - Storage is temporary since data loss occurs when the EC2 instance is stopped
    - Faster with higher I/O speeds
    - Recommended for:
      - Temporary storage needs 
      - Data replicated across multiple instances
- Amazon Elastic File System (EFS)
  - EFS is a serverless network file system for sharing files.
    - Only supports the Linux file system
    - Accessible across different Availability Zones in the same Region
    - More expensive than EBS
    - Recommended for:
      - Main directories for business-critical apps 
      - Lift-and-shift existing enterprise apps
- Storage Gateway
  - Storage Gateway is a hybrid storage service
  - Connect on-premises and cloud data
  - Supports a hybrid model
  - Recommended for:
  - Moving backups to the cloud 
  - Reducing costs for hybrid cloud storage 
  - Low latency access to data
- AWS Backup
  - AWS Backup helps you manage data backups across multiple AWS services. 
  - Integrates with resources like EC2, EBS, EFS, and more
  - Create a backup plan that includes frequency and retention
