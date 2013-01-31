
module ModelViewHTMLHelpers
	def html_id
		self.title.gsub(/\s*/, '')
	end
end

Ruhoh::Resources::Page::ModelView.send(:include, ModelViewHTMLHelpers)
