function FindProxyForURL(url, host) {
    // Send only Atlassian MCP traffic via gateway
    if (dnsDomainIs(host, "mcp.atlassian.com")) {
        return "PROXY yahoo.com";  // adjust port as needed
    }

    // Everything else goes direct
    return "DIRECT";
}
