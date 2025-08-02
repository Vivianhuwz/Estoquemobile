// Supabase配置
// 请在部署前替换为您的实际Supabase项目配置
window.SUPABASE_CONFIG = {
  url: 'https://your-project-ref.supabase.co',
  anonKey: 'your-anon-key-here'
};

// 如果您使用环境变量（推荐用于生产环境），可以这样配置：
// window.SUPABASE_CONFIG = {
//   url: process.env.REACT_APP_SUPABASE_URL || 'https://your-project-ref.supabase.co',
//   anonKey: process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key-here'
// };

// 注意：在生产环境中，建议使用环境变量来存储敏感信息
// 在Netlify中，您可以在站点设置的Environment variables中设置这些值