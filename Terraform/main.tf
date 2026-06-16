module "ec2" {
  source        = "git::https://github.com/krishnaa-gupta/terraform-modules.git//Modules/EC2"
  ami_id        = "ami-0e38835daf6b8a2b9"
  instance_type = "t3.micro"
  instance_name = "Jenkins-server"
  key_name      = "tic-tac-toe"


}
