module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      dist: {
        files: ['public/**/*'],
				tasks: ['refresh']
      }
    },
    copy: {
      chrome: {
				expand: true,
				cwd: 'public',
        src: ['**'],
        dest: 'chrome/data/'
      },
			firefox:{
				expand: true,
				cwd: 'public',
				src: ['**'],
				dest: 'firefox/data/'
			}
    },
    clean: {
      chrome: {
        src: 'chrome/data/'
      },
			firefox:{
				src: 'firefox/data/'
			}
    }
	});
  // require('load-grunt-tasks')(grunt);

  grunt.registerTask('refresh', ['clean', 'copy']);
	grunt.registerTask('dev', ['watch']);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
