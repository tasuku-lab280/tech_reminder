module MarkdownHelper
  REDCARPET_OPTIONS = {
    autolink:           true,  # <>で囲まれてなくてもリンクを認識
    space_after_headers: true, # # と文字の間にスペースを要求
    no_intra_emphasis:  true,  # 単語中の強調を認識しない
    fenced_code_blocks: true,  # フェンスのあるコードブロックを認識
    strikethrough:      true,  # ~ 2つで取り消し線
    superscript:        true,  # ^ の後ろが上付き文字
    tables:             true,  # テーブルを認識
    underline:          true,  # 斜線(* *)
    highlight:          true,  # ハイライト(== ==)
    quote:              true,  # 引用符(" ")
    footnotes:          true,  # 脚注( ^[1] )
  }.freeze

  def markdown(text)
    html_render = HTMLwithCoderay.new(filter_html: true, hard_wrap: true)
    markdown = Redcarpet::Markdown.new(html_render, REDCARPET_OPTIONS)
    markdown.render(text).html_safe
  end

  class HTMLwithCoderay < Redcarpet::Render::HTML
    def block_code(code, language)
      CodeRay.scan(code, language || 'md').div
    end
  end
end
