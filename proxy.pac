function FindProxyForURL(url, host) {
    // Send only Atlassian MCP traffic via gateway
    if (dnsDomainIs(host, "mcp.atlassian.com")) {
        return "PROXY return 127.0.0.1:8888";  // adjust port as needed";  // adjust port as needed
    }

    // Everything else goes direct
    return "DIRECT";
}
