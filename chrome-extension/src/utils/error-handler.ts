// error-handler.ts
export function formatOpenAIError(err: unknown) {
  if (!err) return { message: 'Unknown error' };
  if (typeof err === 'string') return { message: err };
  // Typical axios / fetch error shapes
  // @ts-ignore
  if (err?.response?.data) return { message: err.response.data?.error?.message || JSON.stringify(err.response.data) };
  // @ts-ignore
  if (err?.message) return { message: err.message };
  return { message: JSON.stringify(err) };
}

export function handleError(what: string, err: unknown) {
  const info = formatOpenAIError(err);
  console.error(`[Error] ${what}:`, info.message);
  return {
    success: false,
    error: {
      message: info.message,
      context: what
    }
  };
}