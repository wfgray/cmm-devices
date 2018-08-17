pipeline{
	agent any
	stages {
		stage('Compile Stage'){
			steps {
			    sh '/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/maven-3.5.3/bin/mvn clean compile'
			}
		}
        stage('Package Stage'){
			steps {
				sh '/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/maven-3.5.3/bin/mvn clean package'
			}
		}
        stage('Deployment Stage'){
			steps {
				sh '/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/maven-3.5.3/bin/mvn deploy'
			}
		}
	}
}
