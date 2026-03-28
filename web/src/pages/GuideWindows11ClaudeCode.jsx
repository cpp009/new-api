/*
 * Windows 11 Claude Code 配置中转方案
 * 内容基于公开教程，参数已替换为 claw-api
 */
import React from 'react';

const block = {
  background: '#f8f9fa',
  borderLeft: '5px solid #667eea',
  padding: '20px 24px',
  borderRadius: '12px',
  marginBottom: '24px',
};

const codeBox = {
  background: '#1e1e1e',
  color: '#d4d4d4',
  padding: '16px 20px',
  borderRadius: '8px',
  fontFamily: 'monospace',
  fontSize: '14px',
  overflowX: 'auto',
  margin: '12px 0',
};

const h2Style = { fontSize: '18px', fontWeight: 600, marginTop: 0, marginBottom: '12px', color: '#2c3e50' };
const h3Style = { fontSize: '15px', fontWeight: 600, marginTop: '16px', marginBottom: '8px', color: '#34495e' };
const pStyle = { margin: '8px 0', fontSize: '15px', lineHeight: 1.8 };
const liStyle = { margin: '6px 0', fontSize: '15px', lineHeight: 1.8 };

export default function GuideWindows11ClaudeCode() {
  return (
    <div style={{ maxWidth: '860px', margin: '48px auto', padding: '0 24px 48px', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif', lineHeight: 1.8, color: '#2c3e50' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)', color: '#fff', padding: '40px 32px', borderRadius: '16px', marginBottom: '32px', textAlign: 'center', boxShadow: '0 10px 30px rgba(102,126,234,0.3)' }}>
        <h1 style={{ fontSize: 'clamp(20px,4vw,28px)', margin: '0 0 10px', fontWeight: 700 }}>Windows 11 Claude Code 配置中转方案</h1>
        <p style={{ fontSize: '15px', margin: '6px 0', opacity: 0.92 }}>在 Windows 11 上配置 Claude Code 接入 claw-api</p>
      </header>

      {/* 简介 */}
      <div style={block}>
        <h2 style={h2Style}>为什么使用 Claude Code？</h2>
        <p style={pStyle}>Claude Code 是由 Anthropic 公司发布的终端命令行 AI 编程工具，能够通过自然语言指令执行复杂的软件开发任务，支持跨文件编辑、自动化测试、Git 操作等，底层依赖 Claude 系列模型的长上下文能力（最高 200K token）。</p>
        <p style={pStyle}>国内用户直接使用面临网络与成本问题，通过 <strong>claw-api</strong> 中转可解决访问问题并降低使用成本。</p>
      </div>

      {/* 步骤一 */}
      <div style={block}>
        <h2 style={h2Style}>步骤一：安装前置依赖环境</h2>
        <h3 style={h3Style}>安装 Node.js（v18 及以上）</h3>
        <ul>
          <li style={liStyle}>访问 <a href="https://nodejs.org" target="_blank" rel="noreferrer" style={{ color: '#2980b9' }}>nodejs.org</a> 下载 Windows LTS 版本</li>
          <li style={liStyle}>运行 .msi 安装程序，务必勾选 <strong>"Add to PATH"</strong></li>
          <li style={liStyle}>安装完成后，以管理员身份打开 PowerShell 验证：</li>
        </ul>
        <div style={codeBox}>
          <div>node --version</div>
          <div>npm --version</div>
        </div>
        <p style={pStyle}>返回版本号（如 v18.x.x）则说明环境就绪。</p>
      </div>

      {/* 步骤二 */}
      <div style={block}>
        <h2 style={h2Style}>步骤二：安装 Claude Code</h2>
        <p style={pStyle}>以管理员身份打开 PowerShell，执行：</p>
        <div style={codeBox}>npm install -g @anthropic-ai/claude-code</div>
        <p style={pStyle}>国内网络可使用镜像加速：</p>
        <div style={codeBox}>npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com</div>
        <p style={pStyle}>安装完成后验证：</p>
        <div style={codeBox}>claude --version</div>
      </div>

      {/* 步骤三 */}
      <div style={block}>
        <h2 style={h2Style}>步骤三：配置 claw-api 中转</h2>
        <h3 style={h3Style}>1. 获取 API Key</h3>
        <ul>
          <li style={liStyle}>访问 <a href="https://claw-api.com" target="_blank" rel="noreferrer" style={{ color: '#2980b9' }}>claw-api.com</a> 注册账号</li>
          <li style={liStyle}>进入控制台 → 令牌管理 → 添加令牌 → 复制 API Key</li>
        </ul>
        <h3 style={h3Style}>2. 配置环境变量</h3>
        <p style={pStyle}>在 PowerShell 中执行（临时生效）：</p>
        <div style={codeBox}>
          <div>{`$env:ANTHROPIC_BASE_URL="https://claw-api.com"`}</div>
          <div>{`$env:ANTHROPIC_AUTH_TOKEN="sk-你的APIKey"`}</div>
        </div>
        <p style={pStyle}>或在系统环境变量中永久设置以上两个变量，无需每次重复配置。</p>
        <h3 style={h3Style}>3. 验证配置</h3>
        <div style={codeBox}>
          <div>Write-Host "ANTHROPIC_BASE_URL: $env:ANTHROPIC_BASE_URL"</div>
          <div>Write-Host "ANTHROPIC_AUTH_TOKEN: $env:ANTHROPIC_AUTH_TOKEN"</div>
        </div>
        <p style={pStyle}>地址和 Token 正确后即可开始使用 Claude Code。</p>
      </div>

      <p style={{ ...pStyle, color: '#888', fontSize: '13px', textAlign: 'center' }}>如遇问题请联系 技术支持QQ群: 760372409</p>
    </div>
  );
}
