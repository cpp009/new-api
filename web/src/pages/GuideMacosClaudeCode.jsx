import React from 'react';

const sectionStyle = {
  background: '#f8f9fa',
  borderLeft: '5px solid #10b981',
  padding: '20px 24px',
  borderRadius: '12px',
  marginBottom: '24px',
};

const codeStyle = {
  background: '#111827',
  color: '#e5e7eb',
  padding: '14px 16px',
  borderRadius: '10px',
  overflowX: 'auto',
  fontSize: '14px',
  lineHeight: 1.7,
};

export default function GuideMacosClaudeCode() {
  return (
    <div className='mt-[60px] px-4 py-8'>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #059669 0%, #2563eb 100%)',
            color: '#fff',
            borderRadius: 20,
            padding: '32px 28px',
            marginBottom: 24,
            boxShadow: '0 12px 30px rgba(5, 150, 105, 0.25)',
          }}
        >
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 38px)', margin: 0 }}>
            在 MacOS 上高效使用 Claude Code
          </h1>
          <p style={{ marginTop: 12, marginBottom: 0, fontSize: 16, opacity: 0.95 }}>
            这页内容基于公开教程整理，并把接入参数改成 claw-api。
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>1. 安装 Node.js 环境</h2>
          <p>Claude Code 需要 Node.js 环境才能运行。MacOS 上推荐两种安装方式：</p>
          <ul>
            <li>方式一：访问 https://nodejs.org 下载 macOS 安装包（推荐）</li>
            <li>方式二：如果你已安装 Homebrew，可直接使用 brew 安装</li>
          </ul>
          <div style={codeStyle}>
            <code>{`node --version\nnpm --version\n\n# Homebrew 安装\nbrew install node`}</code>
          </div>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>2. 安装 Claude Code</h2>
          <p>建议直接安装官方版 Claude Code：</p>
          <div style={codeStyle}>
            <code>{`npm install -g @anthropic-ai/claude-code\nclaude --version`}</code>
          </div>
          <p>如果你在国内网络环境下安装慢，也可以加 npm 镜像：</p>
          <div style={codeStyle}>
            <code>{`npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com`}</code>
          </div>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>3. 配置 claw-api 环境变量</h2>
          <p>如果你用的是 zsh（macOS 默认），把下面内容写入 <code>~/.zshrc</code>：</p>
          <div style={codeStyle}>
            <code>{`echo 'export ANTHROPIC_BASE_URL="https://claw-api.com"' >> ~/.zshrc\necho 'export ANTHROPIC_AUTH_TOKEN="sk-your-token-here"' >> ~/.zshrc\n\n# 可选模型配置\necho 'export ANTHROPIC_MODEL="claude-sonnet-4-20250514"' >> ~/.zshrc\necho 'export ANTHROPIC_SMALL_FAST_MODEL="claude-3-5-haiku-20241022"' >> ~/.zshrc\n\nsource ~/.zshrc`}</code>
          </div>
          <p>如果你用的是 bash，则把同样内容写入 <code>~/.bash_profile</code>，然后执行：</p>
          <div style={codeStyle}>
            <code>{`source ~/.bash_profile`}</code>
          </div>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>4. 验证配置是否成功</h2>
          <div style={codeStyle}>
            <code>{`echo $ANTHROPIC_BASE_URL\necho $ANTHROPIC_AUTH_TOKEN\necho $ANTHROPIC_MODEL\necho $ANTHROPIC_SMALL_FAST_MODEL`}</code>
          </div>
          <p>如果输出了你刚配置的地址和 Token，就说明已经生效。</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>5. 开始使用</h2>
          <div style={codeStyle}>
            <code>{`cd your-project-folder\nclaude`}</code>
          </div>
          <p>首次运行后，就可以直接在项目里用 Claude Code 干活了。</p>
        </div>
      </div>
    </div>
  );
}
