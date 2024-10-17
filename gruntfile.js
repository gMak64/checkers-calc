module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
    'gh-pages': {
        options: {
            base: 'dist'
        },
        src: '**/*'
      },
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      },
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-gh-pages');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  
  };
  