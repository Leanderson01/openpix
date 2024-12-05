# Projeto de Integração com a API OpenPix

Este projeto tem como objetivo integrar a API OpenPix usando o SDK da Woovi para facilitar a criação, consulta e gerenciamento de cobranças via PIX e boletos. A aplicação utiliza tecnologias modernas para garantir eficiência e escalabilidade.

---

## Objetivo da Aplicação

O projeto busca oferecer funcionalidades que simplifiquem a interação com a API OpenPix, incluindo:

- Geração de tokens de acesso.
- Criação e listagem de cobranças.
- Consulta de status de cobranças.
- Geração de QR Codes e códigos de pagamento para PIX.
- Geração de boletos para pagamento.

O MVP foca em implementar as principais funcionalidades da API OpenPix, permitindo expansão futura com integrações e melhorias.

---

## Funcionalidades do MVP

1. **Geração de Token**:

   - Obtenção de um token de acesso à API para autenticação.

2. **Criação de Cobranças**:

   - Gerar cobranças com valores definidos.
   - Geração de códigos copia e cola para PIX.
   - Geração de QR Codes.

3. **Listagem de Cobranças**:

   - Listar cobranças realizadas.
   - Filtragem por status e data.

4. **Consulta de Status**:

   - Verificar o status atual de uma cobrança.

5. **Geração de Boletos**:
   - Criação de boletos como alternativa de pagamento.

---

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e bibliotecas:

- **Next.js**: Framework React para renderização do lado do servidor.
- **Tailwind CSS**: Biblioteca para estilização rápida e responsiva.
- **Woovi NodeJS SDK**: Biblioteca para interagir com a API OpenPix.

---

## Documentação

Recursos para consulta:

- [API da OpenPix](https://developers.openpix.com.br/api)
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação para usar o SDK do OpenPix](https://github.com/woovibr/woovi-nodejs-sdk/blob/main/docs/usage.md)

---

Essa estrutura está preparada para futuras expansões, integrando novas funcionalidades e melhorando a experiência do usuário.

## Estrutura do Projeto

```
└── 📁openpix
    └── 📁.git
        └── 📁branches
        └── 📁hooks
            └── applypatch-msg.sample
            └── commit-msg.sample
            └── fsmonitor-watchman.sample
            └── post-update.sample
            └── pre-applypatch.sample
            └── pre-commit.sample
            └── pre-merge-commit.sample
            └── pre-push.sample
            └── pre-rebase.sample
            └── pre-receive.sample
            └── prepare-commit-msg.sample
            └── push-to-checkout.sample
            └── update.sample
        └── 📁info
            └── exclude
        └── 📁logs
            └── 📁refs
                └── 📁heads
                    └── main
            └── HEAD
        └── 📁objects
            └── 📁00
                └── 4145cddf3f9db91b57b9cb596683c8eb420862
            └── 📁0c
                └── c12e642c26d3e29842cd7b550b6b01f3fa43c6
            └── 📁10
                └── 9807be0f73749162de63805d55dd3b669c248d
            └── 📁11
                └── 4d9543b43768d27c96cc3e80b5208619f406ef
            └── 📁12
                └── 7e2153b02c0831b90c81d969e4537b7fe2b960
            └── 📁1a
                └── 69fd2a450afc3bf47e08b22c149190df0ffdb4
            └── 📁1b
                └── 62daacff96dad6584e71cd962051b82957c313
            └── 📁37
                └── 224185490e6db2d26a574d66d4d476336bf644
            └── 📁3d
                └── a9d0338d1de62d8fcc8c6d6332ccea0138617f
            └── 📁3e
                └── ee0141abe634fab81de261c7133991b5a56a17
            └── 📁51
                └── 74b28c565c285e3e312ec5178be64fbeca8398
            └── 📁56
                └── 7f17b0d7c7fb662c16d4357dd74830caf2dccb
            └── 📁6b
                └── 717ad346d3dff8914e9545038c799226d59c89
            └── 📁70
                └── bc3836ae533b7f04455f2eb9624af630e6b4fb
            └── 📁71
                └── 8d6fea4835ec2d246af9800eddb7ffb276240c
            └── 📁77
                └── 053960334e2e34dc584dea8019925c3b4ccca9
            └── 📁a3
                └── 6cde01c60b91e16e4c976d00546686e2d4e470
            └── 📁b2
                └── b2a44f6ebc70c450043c05a002e7a93ba5d651
            └── 📁c1
                └── 334095f876a408c10f2357faaced969ec090ab
            └── 📁c2
                └── 2d4a2fed8dfaaed4392f226d5d0e95927cfb3e
            └── 📁c8
                └── 8f389de09f418da376598c42e8788d4fb6d172
            └── 📁d3
                └── 2cc78b89fc9af2b1caf304864e10f041df05e6
            └── 📁e2
                └── 15bc4ccf138bbc38ad58ad57e92135484b3c0f
            └── 📁e9
                └── ffa3083ad279ecf95fd8eae59cb253e9a539c4
            └── 📁f2
                └── ae185cbfd16946a534d819e9eb03924abbcc49
            └── 📁fc
                └── b741a341df889205f9868e01cdef51cc530ae9
            └── 📁info
            ├── pack
        └── 📁refs
            └── 📁heads
                └── main
            ├── tags
        └── COMMIT_EDITMSG
        └── config
        └── description
        └── HEAD
        └── index
    └── 📁public
        └── file.svg
        └── globe.svg
        └── next.svg
        └── vercel.svg
        └── window.svg
    └── 📁src
        └── 📁app
            └── 📁fonts
                └── GeistMonoVF.woff
                └── GeistVF.woff
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── page.tsx
    └── .eslintrc.json
    └── .gitignore
    └── bun.lockb
    └── next-env.d.ts
    └── next.config.ts
    └── package-lock.json
    └── package.json
    └── postcss.config.mjs
    └── README.md
    └── tailwind.config.ts
    └── tsconfig.json
```
