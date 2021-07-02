require 'open-uri'

module Jekyll
  class LibraryComponentTag < Liquid::Tag
    BASE_URL_ENV_VAR = 'LIBRARY_BASE_URL'

    def initialize(tag_name, name, tokens)
      super
      @name = name.strip
      @base_url = ENV[BASE_URL_ENV_VAR]
      @fs_path = "node_modules/uswds/build/patterns/#{@name}/#{@name}.markup-only.html"
    end

    def get_from_server()
      url = "#{@base_url}/patterns/#{@name}/#{@name}.markup-only.html"
      begin
        open(url).read
      rescue => e
        print "library_component: error fetching #{url}: #{e}\n"
        throw e
      end
    end

    def render(context)
      site = context.registers[:site]
      if not site.data.key? 'library_components'
        site.data['library_components'] = {}
      end
      cache = site.data['library_components']
      if not cache.key? @name
        if @base_url
          puts " + local uswds component: #{@name}"
          html = get_from_server
        elsif File.exist?(@fs_path)
          puts " + packaged uswds component: #{@name}"
          html = open(@fs_path).read
        else
          raise (
            "Unable to find the library component #{@name}! " +
            "Please either define #{BASE_URL_ENV_VAR} or run " +
            "'pl:build' in the uswds directory."
          )
        end
        # Replace asset path from library to what site needs.
        html.gsub! "../../img/", "#{site.baseurl}/assets/img/"
        cache[@name] = html
      end
      cache[@name]
    end
  end
end

Liquid::Template.register_tag('library_component', Jekyll::LibraryComponentTag)
