# Networking Services
- Networking connects computers together and allows for the sharing of data and applications, around the globe, in a secure manner using virtual routers, firewalls, and network management services
- Amazon Virtual Private Cloud (VPC)
  - Private virtual network
  - Launch resources like EC2 instances inside a VPC
  - Isolate and protect resources
  - A VPC spans Availability zones in a region
- AZ's consist of one or more physically separated data centers, each with redundant power, networking, and connectivity, housed in separate facilities
- Subnet allows you to split the network inside a VPC. This is where you launch resources like EC2 instances
- Network ACL access control lists (acls) ensure the proper traffic is allowed into the subnet
- Router and Route table defines where network and traffic is routed
- Internet gateway allows public traffic to the internet from a VPC

## VPC Peering
- Allows you to connect 2 VPCs together
- peering facilitates the transfer of data in a secure manner