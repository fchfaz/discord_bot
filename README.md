# Chatbot Discord dengan ChatGPT (gpt-3.5-turbo)

Chatbot discord simpel yang menggunakan teknologi ChatGPT dari OpenAI.

## Requirements
- Sudah punya akun Discord dan aktifin Developer mode pada setting aplikasi (pastinya ini mah :v)
- Telah membuatbuat Application di Discord Developers Portal: https://discord.com/developers/applications
- Telah membuat akun OpenAI: https://platform.openai.com/
- Download dan install Git di https://git-scm.com/downloads
- Download dan install Node.JS di https://nodejs.org/en/download
- Download dan install VS Code di https://code.visualstudio.com/download
- Clone repo ini atau bisa unduh file zip nya

## Petunjuk

### Buat Application Discord Developers Portal

1. Buka situs nya https://discord.com/developers/applications

2. Klik tombol New Application
![Klik Tombol New Application](https://user-images.githubusercontent.com/52305641/235567470-0374545c-ef6f-460b-b78b-5d9c2bea931f.png =468x300)

3. Isi nama bot (terserah anda ya) lalu klik tombol Create
![Nama bot](https://user-images.githubusercontent.com/52305641/235567766-c2bedead-5fdd-424e-9726-a9c11020763d.png =468x300)

4. Setelah bot dibuat maka akan muncul sidebar menu seperti dibawah, lalu klik options Bot.
![Klik menu Bot](https://user-images.githubusercontent.com/52305641/235568024-a48f1fbc-14a0-4b43-9b30-7537570907d4.png =100x200)

5. Kemudian scroll kebawah sampai bagian Previlaged Gateway Intents, aktifkan centang pada ke-3 pilihannnya seperti pada gambar dibawah, lalu klik tombol Save Changes
![Previleged](https://user-images.githubusercontent.com/52305641/235568285-5ea4e5a7-0bbd-4dd1-8948-c6db9aa2fa01.png =468x300)

6. Lanjut, di sidebar menu klik options OAuth2 --> URL Generator

![URL-Generator](https://user-images.githubusercontent.com/52305641/235568731-ecd41b14-7a89-4eb1-a80c-408639662b9b.png =200x100)

7. Pada bagian Scopes centang 'bot' dan 'applications.command'
![Scopes](https://user-images.githubusercontent.com/52305641/235569085-97ec93ad-f477-4657-9882-95a7592528a5.png =468x300)

8. Lalu pada bagian Bot Permissions centang 'Send Messages'
![Bot Permissions](https://user-images.githubusercontent.com/52305641/235569147-3295aa1d-c3a3-43cd-8533-7b80b0e1fdae.png =468x300)

9. Scroll kebawah dan salin Generated-Url nya, buka tab baru di browser kalian / kalian bisa paste langsung di chat channel server kalean
![Copy URL](https://user-images.githubusercontent.com/52305641/235570779-0ee5a95f-0616-412c-b5a5-108f2608633d.png)

10. Tambahkan ke Channel Discord kalean.
![Add to Channel](https://user-images.githubusercontent.com/52305641/235570833-bc7b1a21-6e9d-458c-a3a4-03001a0b7f34.png=200x200)

Udah gitu aja.


## Petunjuk penggunaan

1. Clone repository ini

```powershell
git clone https://github.com/fchfaz/discord_bot.git .
```

2. Install semua dependencies yang diperlukan

- Pakai perintah npm
```powershell
npm install
```

3. Konfigurasi isi dari file `.env` dan sesuaikan isi dengan key dari Token Application Discord, API-Key OpenAI dan ID Channel server Discord kalean.

-Copy Token Discord dan paste ke file `.env` dibagian "TOKEN"
![Token](https://user-images.githubusercontent.com/52305641/235572206-86f3b554-5964-4602-aa0e-b6d55b9b936f.png)

-Buat dan copy API-Key OpenAI di: https://platform.openai.com/account/api-keys dan paste dibagian "API-KEY"
![buat](https://user-images.githubusercontent.com/52305641/235572206-86f3b554-5964-4602-aa0e-b6d55b9b936f.png)
![copy](https://user-images.githubusercontent.com/52305641/235572556-1e1cac84-6367-4124-a509-0715ffe21049.png)

-Copy ID Channel server discord dan paste dibagian "CHANNEL_ID"
![channelID](https://user-images.githubusercontent.com/52305641/235572816-59205693-f638-406c-9db8-b42c55375299.png)


4. Jalankan botnya

- Pakai perintah npm
```powershell
npm run start
```

