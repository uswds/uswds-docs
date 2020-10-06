require 'open-uri'

module Jekyll
  class PatternLabComponentTag < Liquid::Tag
    BASE_URL_ENV_VAR = 'PATTERNLAB_BASE_URL'

    def initialize(tag_name, name, tokens)
      super
      @name = name.strip
      @base_url = ENV[BASE_URL_ENV_VAR]
      @fs_path = "node_modules/uswds/patternlab/patterns/components-#{@name}/components-#{@name}.markup-only.html"
    end

    def get_from_server()
      url = "#{@base_url}/components/render/#{@name}"
      begin
        open(url).read
      rescue => e
        print "patternlab_component: error fetching #{url}: #{e}\n"
        throw e
      end
    end

    def render(context)
      site = context.registers[:site]
      if not site.data.key? 'patternlab_components'
        site.data['patternlab_components'] = {}
      end
      cache = site.data['patternlab_components']
      if not cache.key? @name
        if @base_url
          puts " + local uswds component: #{@name}"
          html = get_from_server
        elsif File.exist?(@fs_path)
          puts " + packaged uswds component: #{@name}"
          html = open(@fs_path).read
        else
          raise (
            "Unable to find the patternlab component #{@name}! " +
            "Please either define #{BASE_URL_ENV_VAR} or run " +
            "'patternlab build' in the uswds directory."
          )
        end
        html.gsub! "../../dist/", "#{site.baseurl}/assets/"
        cache[@name] = html
      end
      cache[@name]
    end
  end
end

Liquid::Template.register_tag('patternlab_component', Jekyll::PatternLabComponentTag)
