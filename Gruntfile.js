module.exports = function(grunt) {

  grunt.initConfig({
    express: {
      options: {
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 'express:dev', 'watch', 'jshint']);

};