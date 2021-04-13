---
permalink: /about/security/
redirect_from:
- /security/
- /about/security-information/
layout: styleguide
title: Security
category: About
lead: Developing and using USWDS with security in mind
---

{{ site.data.security.decoded
  | markdownify
  | split: '</h1>'
  | last }}

## Verifying ZIP release hash
The `/security` directory in the [USWDS repo [github.com]](https://github.com/uswds/uswds/tree/develop/security) contains SHA-256 hashes for each USWDS hashed release ZIP file. Use these hashes to verify the authenticity of USWDS release ZIP files. Compare our SHA-256 hash with the hash you generate from the ZIP you wish to test.

You can also find the SHA-256 hash for the current release on the [Download page]({{ site.baseurl }}/download/).

**OSX/Linux**: Use the `sha256sum` command in a terminal window. (Replace the path with the path to the file you wish to test.)

{:.site-terminal}
```bash
sha256sum path/to/filename.zip
```

**Windows:** Open up PowerShell and run the following command. (Replace the path with the path to the file you wish to test.)

{:.site-terminal}
```bash
powershell get-filehash -algorithm sha256 .\path\to\filename.zip
```
