import { Navbar as Appbar , Button, Link, Text, useTheme } from '@nextui-org/react';
import { Layout } from './Layout.js';
import { AcmeLogo } from './AcmeLogo.js';

export default function Navbar() {
    const { isDark } = useTheme();

    return (
        <Layout>
            <Appbar isBordered={isDark} variant="sticky">
                <Appbar.Brand>
                    <AcmeLogo />
                    <Text b color="inherit" hideIn="xs">
                        ACME
                    </Text>
                </Appbar.Brand>
                <Appbar.Content
                    enableCursorHighlight
                    hideIn="xs"
                    variant="underline"
                >
                    <Appbar.Link href="#">Features</Appbar.Link>
                    <Appbar.Link isActive href="#">
                        Customers
                    </Appbar.Link>
                    <Appbar.Link href="#">Pricing</Appbar.Link>
                    <Appbar.Link href="#">Company</Appbar.Link>
                </Appbar.Content>
                <Appbar.Content>
                    <Appbar.Link color="inherit" href="#">
                        Login
                    </Appbar.Link>
                    <Appbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Appbar.Item>
                </Appbar.Content>
            </Appbar>
        </Layout>
    );
}
