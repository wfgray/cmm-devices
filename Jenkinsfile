pipeline{
	agent any
	
	stages {
		stage('Compile Stage'){
			steps {
				withMaven(maven : 'maven-3.5.4'){
					sh 'mvn clean'
				}
			}
		}
	}
}
