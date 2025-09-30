export default function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6 rounded-2xl border p-6">
      <h2 className="text-2xl font-bold">Entrar</h2>
      <form className="space-y-4">
        <input name="email" type="email" placeholder="E-mail" className="w-full rounded-xl border px-4 py-3" />
        <input name="password" type="password" placeholder="Senha" className="w-full rounded-xl border px-4 py-3" />
        <button className="w-full rounded-xl bg-brand-600 px-6 py-3 text-white">Entrar</button>
      </form>
    </div>
  )
}