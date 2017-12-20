module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      files: ['*.*'],
      options: {
          livereload: 35729,
          open: true,
          hostname: 'localhost'
      },
    },
  });
  grunt.registerTask('default',['watch']);
};
