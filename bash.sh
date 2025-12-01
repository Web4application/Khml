
npm run build
npm run dev
chmod +x khml.js
npm install

 sha256:e19fa8f2d4f900d848200a5045d36c89aebff0340ff1aa59f08be1856ed90105
curl \
    --cert path_to_key_and_cert.pem \
    --header "content-type: application/json" \
    --data-binary "@table.json" \
    https://rst-api-ote.icann.org/v1/table
