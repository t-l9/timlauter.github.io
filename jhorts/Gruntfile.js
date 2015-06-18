module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			angular: {
				src: [
					'public/app/controllers/forecastCtrl.js',
					'public/app/services/weatherService.js',
					'public/app/app.routes.js',
					'public/app/app.js'
				],
				dest: 'public/app/build/production.js',
			},
			scripts: {
				src: [
					'public/scripts/main.js',
					'public/scripts/helloUrban.js'
				],
				dest: 'public/scripts/build/scripts.js'
			}
		},

		uglify: {
			my_target: {
		    	files: {
		    		'public/app/build/production.min.js': ['public/app/build/production.js'],
					'public/scripts/build/scripts.min.js': ['public/scripts/build/scripts.js']
		      	}
			}
		},

		cssmin: {
			target: {
		    	files: {
		      		'public/styles/build/main.min.css': ['public/styles/css/main.css']
		    	}
		  	}
		},

        sass: {
			dist: {
				files: {
					'public/styles/css/main.css' : 'public/styles/sass/main.scss'
				}
			}
		},

		jshint: {
		    all: ['Gruntfile.js', 'app/*.js', 'public/app/controllers/*.js', 'public/app/services/*.js', 'public/scripts/*.js']
		},

		watch: {
			scripts: {
				files: ['public/app/**/*.js', 'Gruntfile.js', 'public/scripts/*.js'],
				options: {
					spawn: false
				},
				tasks: ['concat', 'uglify', 'jshint']
			},
            css: {
				files: 'public/styles/sass/**/*.scss',
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
