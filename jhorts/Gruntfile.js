module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			angular: {
				src: [
					'app/controllers/forecastCtrl.js',
					'app/services/weatherService.js',
					'app/app.routes.js',
					'app/app.js'
				],
				dest: 'app/build/production.js',
			},
			scripts: {
				src: [
					'scripts/main.js',
					'scripts/helloUrban.js'
				],
				dest: 'scripts/build/scripts.js'
			}
		},

		uglify: {
			my_target: {
		    	files: {
		    		'app/build/production.min.js': ['app/build/production.js'],
					'scripts/build/scripts.min.js': ['scripts/build/scripts.js']
		      	}
			}
		},

		cssmin: {
			target: {
		    	files: {
		      		'styles/build/main.min.css': ['styles/css/main.css']
		    	}
		  	}
		},

        sass: {
			dist: {
				files: {
					'styles/css/main.css' : 'styles/sass/main.scss'
				}
			}
		},

		jshint: {
		    all: ['Gruntfile.js', 'app/*.js', 'app/controllers/*.js', 'app/services/*.js', 'scripts/*.js']
		},

		watch: {
			scripts: {
				files: ['app/**/*.js', 'Gruntfile.js', 'scripts/*.js'],
				options: {
					spawn: false
				},
				tasks: ['concat', 'uglify', 'jshint']
			},
            css: {
				files: 'styles/sass/**/*.scss',
				tasks: ['sass', 'cssmin']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass', 'jshint', 'watch']);
};
