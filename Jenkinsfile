pipeline{
	agent any
	
	stages {
		stage('Compile Stage'){
			steps {
				withMaven(maven : 'maven_3_5_4'){
					sh 'mvn clean compile'
				}
			}
		}
		stage('Deployment Stage'){
			steps {
				withMaven('maven_3_5_4'){
					sh 'mvn clean install'
				}
			}
		}
	}
}
