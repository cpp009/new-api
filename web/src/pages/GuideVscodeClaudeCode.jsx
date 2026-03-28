import React from 'react';

const steps = [
  {
    title: '步骤一：安装 Claude Code for VS Code',
    body: '在 VS Code 中进入扩展商店，搜索 Claude Code for VS Code，并完成安装。',
    image: 'https://resource.ksyun.com/project/cms/18a35d84da1ce54e7370df93275fcb01',
  },
  {
    title: '步骤二：打开扩展设置',
    body: '点击扩展右下角齿轮图标，选择设置。',
    image: 'https://resource.ksyun.com/project/cms/492fadf14478860f41b5bd11f811df1e',
  },
  {
    title: '步骤三：选择模型',
    body: '设置模型 ID，例如 deepseek-v3.1。你也可以按自己的需求选择其他可用模型。',
    image: 'https://resource.ksyun.com/project/cms/cd548908db0a1ecfb117d07e5d944084',
  },
  {
    title: '步骤四：配置 settings.json',
    body: '在 settings.json 中配置服务器 BASE_URL 与 AUTH_TOKEN。下面示例已经改成 claw-api 的地址。',
    code: `{
  "claudeCode.selectedModel": "deepseek-v3.1",
  "claudeCode.environmentVariables": [
    {
      "name": "ANTHROPIC_BASE_URL",
      "value": "https://claw-api.com"
    },
    {
      "name": "ANTHROPIC_AUTH_TOKEN",
      "value": "你的 API Key"
    }
  ]
}`,
    image: 'https://resource.ksyun.com/project/cms/beb9e2704bce31cc0b7ae168e0968e6d',
  },
  {
    title: '步骤五：重启 VS Code 并验证',
    body: '保存配置后，关闭所有窗口并重启 VS Code，点击右上角 Claude Code 图标进行验证。',
    image: 'https://resource.ksyun.com/project/cms/6416a4f2eb327dd50891252591dfa3fa',
  },
];

const blockStyle = {
  background: '#f8fafc',
  border: '1px solid #e5e7eb',
  borderRadius: 16,
  padding: 24,
  marginBottom: 20,
  boxShadow: '0 6px 20px rgba(15, 23, 42, 0.06)',
};

const imgStyle = {
  width: '100%',
  borderRadius: 12,
  marginTop: 16,
  border: '1px solid #e5e7eb',
};

export default function GuideVscodeClaudeCode() {
  return (
    <div className='mt-[60px] px-4 py-8'>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            color: '#fff',
            borderRadius: 20,
            padding: '32px 28px',
            marginBottom: 24,
            boxShadow: '0 12px 30px rgba(37, 99, 235, 0.25)',
          }}
        >
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', margin: 0 }}>
            在 VS Code 中使用 Claude Code 接入 claw-api
          </h1>
          <p style={{ marginTop: 12, marginBottom: 0, fontSize: 16, opacity: 0.95 }}>
            这页内容基于公开教程整理，参数已经替换成 claw-api 的接入方式。
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={{ marginTop: 0 }}>一、开始前准备</h2>
          <p>开始前请先完成以下准备：</p>
          <ul>
            <li>已安装 VS Code</li>
            <li>已创建 claw-api 的 API Key</li>
            <li>知道自己要使用的模型名称，例如 deepseek-v3.1</li>
          </ul>
        </div>

        <div style={blockStyle}>
          <h2 style={{ marginTop: 0 }}>二、操作步骤</h2>
          {steps.map((step, index) => (
            <div key={step.title} style={{ marginBottom: index === steps.length - 1 ? 0 : 28 }}>
              <h3>{step.title}</h3>
              <p style={{ lineHeight: 1.8 }}>{step.body}</p>
              {step.code ? (
                <pre
                  style={{
                    background: '#0f172a',
                    color: '#e2e8f0',
                    padding: 16,
                    borderRadius: 12,
                    overflowX: 'auto',
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  <code>{step.code}</code>
                </pre>
              ) : null}
              {step.image ? <img src={step.image} alt={step.title} style={imgStyle} /> : null}
            </div>
          ))}
        </div>

        <div style={blockStyle}>
          <h2 style={{ marginTop: 0 }}>三、验证是否成功</h2>
          <p>重启 VS Code 后，点击 Claude Code 图标：</p>
          <ul>
            <li>如果能正常进入并开始使用，说明配置成功。</li>
            <li>如果报错，优先检查 BASE_URL、API Key、模型名称是否填对。</li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <p style={{ marginBottom: 8, fontWeight: 600 }}>成功示例</p>
            <img
              src='https://resource.ksyun.com/project/cms/8b9f8eb391c32ccc3c0c4add07f2eb0a'
              alt='配置成功示例'
              style={imgStyle}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <p style={{ marginBottom: 8, fontWeight: 600 }}>失败示例</p>
            <img
              src='https://resource.ksyun.com/project/cms/08b2f1bab3a7e3ffc3dd2fa9e166a56a'
              alt='配置失败示例'
              style={imgStyle}
            />
          </div>
        </div>

        <div style={blockStyle}>
          <h2 style={{ marginTop: 0 }}>四、Windows 常见问题</h2>
          <p>如果功能异常，常见原因是缺少 Git Bash。</p>
          <ol>
            <li>
              前往{' '}
              <a href='https://git-scm.com/install/windows' target='_blank' rel='noreferrer'>
                https://git-scm.com/install/windows
              </a>{' '}
              下载并安装。
            </li>
            <li>安装完成后重启 VS Code，再次尝试 Claude Code。</li>
          </ol>
          <img
            src='https://resource.ksyun.com/project/cms/6affde5283dcdf6892bffca578c7df8c'
            alt='功能异常示例'
            style={imgStyle}
          />
          <img
            src='https://resource.ksyun.com/project/cms/063f1e563fd882cf8cac21ba3c388eb0'
            alt='Git 安装页'
            style={imgStyle}
          />
          <img
            src='https://resource.ksyun.com/project/cms/678c0095b1e4c8b265f29d1e546c937d'
            alt='重启后使用示例'
            style={imgStyle}
          />
        </div>
      </div>
    </div>
  );
}
