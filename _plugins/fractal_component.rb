require 'open-uri'

module Jekyll
  class FractalComponentTag < Liquid::Tag
    BASE_URL_ENV_VAR = 'FRACTAL_BASE_URL'

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
        print "fractal_component: error fetching #{url}: #{e}\n"
        throw e
      end
    end

    def render(context)
      site = context.registers[:site]
      if not site.data.key? 'fractal_components'
        site.data['fractal_components'] = {}
      end
      cache = site.data['fractal_components']
      if not cache.key? @name
        if @base_url
          puts " + local uswds component: #{@name}"
          html = get_from_server
        elsif File.exist?(@fs_path)
          puts " + packaged uswds component: #{@name}"
          html = open(@fs_path).read
        else
          raise (
            "Unable to find the fractal component #{@name}! " +
            "Please either define #{BASE_URL_ENV_VAR} or run " +
            "'fractal build' in the uswds directory."
          )
        end
        html.gsub! "../../dist/", "#{site.baseurl}/assets/"
        cache[@name] = html
      end
      cache[@name]
    end
  end
end

Liquid::Template.register_tag('fractal_component', Jekyll::FractalComponentTag)
